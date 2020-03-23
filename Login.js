import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Item,
  Input,
  Icon,
} from 'native-base';
export default class CardHeaderFooterExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      Contraseña: '',
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <Content padder contentContainerStyle={misEstilos.content}>
          <Card>
            <Header style={{backgroundColor: 'steelblue'}} />
            <CardItem header bordered>
              <Text style={misEstilos.textCenter}>Inicio de sesión</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Item inlineLabel>
                  <Icon type="FontAwesome" name="user" />
                  <Input
                    placeholder="Usuario"
                    value={this.state.nombre}
                    onChangeText={nombre => this.setState({nombre})}
                  />
                </Item>
                <Item inlineLabel last>
                  <Icon type="FontAwesome" name="lock" />
                  <Input
                    placeholder="Contraseña"
                    value={this.state.Contraseña}
                    onChangeText={Contraseña => this.setState({Contraseña})}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer style={{backgroundColor: 'steelblue'}}>
              <Button
                style={misEstilos.boton}
                onPress={() =>
                  navigation.navigate('Home', {
                    titulo: 'BIENVENID@',
                    nombre: this.state.nombre,
                    pass: this.state.Contraseña,
                  })
                }>
                <Text style={misEstilos.textCenter}>Ingresar</Text>
              </Button>
              <Button
                primary
                style={misEstilos.boton1}
                onPress={() => navigation.navigate('Registro')}>
                <Text style={misEstilos.textCenter}>Registro</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgray',
  },
  textCenter: {
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
  },
  boton: {
    flex: 1,
    flexDirection: 'row',
    margin: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  boton1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
});
