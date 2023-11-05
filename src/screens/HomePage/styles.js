import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #000000;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ContainerText = styled.View`
  flex-direction: row;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 55px;
`;

export const SubTitle = styled.Text`
  font-size: 28px;
  font-weight: 400;
  color: #72bfe8;
`;

export const Line = styled.View`
  width: 71px;
  height: 1px;
  background-color: #a6aeae;
`;

export const ContainerButton = styled.View`
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border: 1px solid #72bfe8;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 7px;
`;

export const TextButton = styled.Text`
  font-size: 10px;
  color: #72bfe8;
`;

export const ContainerModal = styled.View`
  flex: 1;
  background-color: #ffffffff;
  align-items: center;
  justify-content: center;
`;

export const TextModal = styled.Text`
  font-size: 28px;
  color: #000000;
  font-weight: 700;
  margin-bottom: 14px;
`;

export const InputModal = styled.TextInput`
  width: 80%;
  height: 47px;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 8px;
  font-size: 18px;
`;

export const TextModalButton = styled.Text`
  font-size: 20px;
  color: #ffffffff;
  font-weight: bold;
  text-align: center;
`;

export const Separetor = styled.View`
  margin-top: 40px;
`;
