import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Keyboard, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from '../../components/forms/Button';
import { CategorySelectButton } from '../../components/forms/CategorySelectButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InputForm } from '../../components/forms/InputForm';
import { TransactionTypeButton } from '../../components/forms/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import {
  Container,
  Fields,
  Form,
  Header,
  Title,
  TransactionsTypes,
} from './styles';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  name: string;
  amount: number;
}

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  amount: yup
    .number()
    .typeError('Informe um valor Numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é Obrigatório'),
});

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [cagoryModalOpen, setCagoryModalOpen] = useState(false);
  const datakey = '@gofinances:transactions';

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCagoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCagoryModalOpen(false);
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transão');
    }
    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria');
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
    console.log(data);

    try {
      await AsyncStorage.setItem(datakey, JSON.stringify(data));
      Alert.alert('Salvo com sucesso');
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possivel salvar');
    }
  }

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(datakey);

      console.log(JSON.parse(data));
    }

    loadData();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      containerStyle={{ flex: 1 }}
      style={{ flex: 1 }}
    >
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />

            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

            <TransactionsTypes>
              <TransactionTypeButton
                type="up"
                title="Entradas"
                onPress={() => handleTransactionsTypeSelect('up')}
                isActive={transactionType === 'up'}
              />
              <TransactionTypeButton
                type="down"
                title="Saídas"
                onPress={() => handleTransactionsTypeSelect('down')}
                isActive={transactionType === 'down'}
              />
            </TransactionsTypes>

            <CategorySelectButton
              onPress={handleOpenSelectCategoryModal}
              title={category.name}
            />
          </Fields>

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={cagoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
