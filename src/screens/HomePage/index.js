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
import {useDispatch, useSelector} from 'react-redux';

const HomePage = ({navigation, route}) => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [nameList, setNameList] = useState('');
  const [modalButton, setModalButton] = useState('#000000');

  const user = useSelector(state => state.user.data.name);
  const list = useSelector(state => state.list.data);

  const handlerModal = () => {
    if (nameList && modalButton) {
      dispatch({
        type: 'LIST/setDataList',
        payload: {name: nameList, color: modalButton},
      });
      setModal(false);
    }
  };

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
          <InputModal
            placeholder="Nome da Lista"
            onChangeText={text => setNameList(text)}
          />
          <View style={{flexDirection: 'row'}}>{renderButtonColor()}</View>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 47,
              backgroundColor: modalButton,
              borderRadius: 8,
              justifyContent: 'center',
            }}
            onPress={() => handlerModal()}>
            <TextModalButton>Criar!</TextModalButton>
          </TouchableOpacity>
        </ContainerModal>
      </Modal>
      <Container>
        <ContainerTitle>
          <Line />
          <ContainerText>
            <Title>{user}</Title>
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
