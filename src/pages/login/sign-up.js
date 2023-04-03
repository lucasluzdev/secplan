import React, {useState} from 'react';
import {Switch, Text, Alert} from 'react-native';
import {textWhite} from '../../config/colors';
import DocumentPicker from 'react-native-document-picker';

import {
  Input,
  SubmitButton,
  SubmitButtonText,
  CancelButton,
  CancelButtonText,
  UploadButton,
  UploadButtonText,
} from './styled';

import {Container, Row, Column} from '../styled';

export default function SignUpScreen({navigation}) {
  const [terms, setTerms] = useState(true);
  const [promo, setPromo] = useState(true);
  const [singleFile, setSingleFile] = useState(null);
  const [fullName, setFullName] = useState('');
  const [birth, setBirth] = useState('');
  const [genre, setGenre] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const [confirmPasswd, setConfirmPasswd] = useState('');
  const [phone, setPhone] = useState('');
  const [cellphone, setCellphone] = useState('');

  const toggleSwitch = () => setTerms(previousState => !previousState);
  const toggleSwitch2 = () => setPromo(previousState => !previousState);

  const signUpAlert = () =>
    Alert.alert('Atenção!', 'Cadastro efetuado com sucesso!', [
      {text: 'OK', onPress: () => goToHomePage()},
    ]);

  function goBackToLoginPage(e) {
    navigation.navigate('LoginScreen');
  }

  function goToHomePage() {
    navigation.navigate('HomeScreen');
  }

  function handleSubmit(e) {
    const obj = {
      fullName,
      birth,
      genre,
      email,
      passwd,
      phone,
      cellphone,
      terms,
      promo,
    };

    console.log(obj);

    signUpAlert();
  }

  async function selectFile() {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      // Printing the log realted to the file
      console.log('res : ', res);
      // Setting the state to show single file attributes
      setSingleFile(res[0]);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        console.log('Canceled');
      } else {
        // For Unknown Error
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

  return (
    <Container>
      <Row style={{marginBottom: 15}}>
        <Column>
          <UploadButton onPress={selectFile}>
            <UploadButtonText>Selecioar foto</UploadButtonText>
          </UploadButton>
        </Column>
        <Column
          style={{
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          {singleFile != null ? (
            <Text style={{color: '#fff', fontSize: 14}}>
              Foto selecionada: {singleFile.name ? singleFile.name : 'Nenhuma'}
              {'\n'}
            </Text>
          ) : null}
        </Column>
      </Row>

      <Row>
        <Column>
          <Text style={{color: textWhite}}>Nome completo</Text>
          <Input
            onChangeText={text => setFullName(text)}
            value={fullName}
            autofocus={true}
            placeholder={'Nome completo'}
          />
        </Column>
      </Row>

      <Row>
        <Column>
          <Text style={{color: textWhite}}>Data de nascimento</Text>
          <Input
            onChangeText={text => setBirth(text)}
            value={birth}
            placeholder="dd/mm/aaaa"
            keyboardType="numeric"
          />
        </Column>

        <Column>
          <Text style={{color: textWhite}}>Gênero</Text>
          <Input
            onChangeText={text => setGenre(text)}
            value={genre}
            placeholder={'Gênero'}
          />
        </Column>
      </Row>

      <Row>
        <Column>
          <Text style={{color: textWhite}}>Email</Text>
          <Input
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder={'Email'}
          />
        </Column>

        <Column>
          <Text style={{color: textWhite}}>Confirmar email</Text>
          <Input
            onChangeText={text => setConfirmEmail(text)}
            value={confirmEmail}
            placeholder={'Confirmar email'}
          />
        </Column>
      </Row>

      <Row>
        <Column>
          <Text style={{color: textWhite}}>Senha</Text>
          <Input
            onChangeText={text => setPasswd(text)}
            value={passwd}
            placeholder={'Senha'}
            secureTextEntry={true}
          />
        </Column>

        <Column>
          <Text style={{color: textWhite}}>Confirmar senha</Text>
          <Input
            onChangeText={text => setConfirmPasswd(text)}
            value={confirmPasswd}
            placeholder={'Confirmar senha'}
            secureTextEntry={true}
          />
        </Column>
      </Row>

      <Row>
        <Column>
          <Text style={{color: textWhite}}>Telefone</Text>
          <Input
            onChangeText={text => setPhone(text)}
            value={phone}
            placeholder={'Telefone'}
            keyboardType="numeric"
          />
        </Column>

        <Column>
          <Text style={{color: textWhite}}>Celular</Text>
          <Input
            onChangeText={text => setCellphone(text)}
            value={cellphone}
            placeholder={'Celular'}
            keyboardType="numeric"
          />
        </Column>
      </Row>

      <Row>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={terms ? '#3269a8' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={terms}
          style={{marginTop: 10}}
        />
        <Text style={{color: textWhite, marginTop: 22}}>
          Eu aceito os termos de uso
        </Text>
      </Row>

      <Row>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={promo ? '#3269a8' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch2}
          value={promo}
          style={{marginTop: -20}}
        />
        <Text style={{color: textWhite, marginTop: 8}}>
          Aceito receber emails promocionais
        </Text>
      </Row>

      <Row>
        <Column>
          <CancelButton onPress={e => goBackToLoginPage(e)}>
            <CancelButtonText>CANCELAR</CancelButtonText>
          </CancelButton>
        </Column>

        <Column>
          <SubmitButton onPress={e => handleSubmit(e)}>
            <SubmitButtonText>CADASTRAR</SubmitButtonText>
          </SubmitButton>
        </Column>
      </Row>
    </Container>
  );
}
