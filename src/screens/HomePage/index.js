import React, {useState} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {
  Container,
  Title,
  Button,
  TextButton,
  ContainerTitle,
  ContainerButton,
  SubTitle,
  Line,
  ContainerText,
  ContainerModal,
  TextModal,
  InputModal,
  TextModalButton,
  Separetor,
} from './styles';
import More from '../../assets/More.svg';
import ListTasks from '../../components/ListTasks';

const HomePage = ({navigation, route}) => {
  const [modal, setModal] = useState(false);
  const [modalButton, setModalButton] = useState('#000000');

  colorButton = [
    '#5CD859',
    '#24A6D9',
    '#5958D9',
    '#8022D9',
    '#D159D8',
    '#D85963',
    '#D88559',
  ];

  const renderButtonColor = () => {
    return colorButton.map(color => {
      return (
        <TouchableOpacity
          key={color}
          style={{
            backgroundColor: color,
            width: 30,
            height: 30,
            margin: 10,
            borderRadius: 8,
          }}
          onPress={() => setModalButton(color)}
        />
      );
    });
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}>
        <ContainerModal>
          <TextModal>Criar Lista do Gustavo</TextModal>
          <InputModal placeholder="Nome da Lista" />
          <View style={{flexDirection: 'row'}}>{renderButtonColor()}</View>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 47,
              backgroundColor: modalButton,
              borderRadius: 8,
              justifyContent: 'center',
            }}
            onPress={() => setModal(false)}>
            <TextModalButton>Criar!</TextModalButton>
          </TouchableOpacity>
        </ContainerModal>
      </Modal>
      <Container>
        <ContainerTitle>
          <Line />
          <ContainerText>
            <Title>{route.params}</Title>
            <SubTitle>List</SubTitle>
          </ContainerText>
          <Line />
        </ContainerTitle>
        <ContainerButton>
          <Button
            onPress={() => {
              setModal(true);
            }}>
            <More />
          </Button>
          <TextButton>Adicionar a lista</TextButton>
        </ContainerButton>
        <Separetor />
        <ListTasks />
      </Container>
    </>
  );
};

export default HomePage;
