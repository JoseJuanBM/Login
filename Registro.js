import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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
  Label,
  Input,
  Icon,
  View,
} from 'native-base';
export default class CardHeaderFooterExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pass: '',
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <Content padder contentContainerStyle={misEstilos.content}>
          <Card>
            <Header style={{backgroundColor: 'steelblue'}} />
            <CardItem>
              <Body
                style={{
                  alignContent: 'center',
                  height: 200,
                }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}>
                    <Item inlineLabel style={{width: 150}}>
                      <Icon type="FontAwesome" name="user" />
                      <Input
                        placeholder="Nombre"
                        value={this.state.name}
                        onChangeText={name => this.setState({name})}
                      />
                    </Item>
                    <Item inlineLabel>
                      <Icon type="FontAwesome" name="user-o" />
                      <Input placeholder="Usuario" />
                    </Item>

                    <Item inlineLabel>
                      <Icon type="MaterialIcons" name="email" />
                      <Input placeholder="Correo" />
                    </Item>

                    <Item inlineLabel last>
                      <Icon type="FontAwesome" name="lock" />
                      <Input
                        placeholder="Contraseña"
                        value={this.state.pass}
                        onChangeText={pass => this.setState({pass})}
                      />
                    </Item>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}>
                    <Button
                      style={{
                        backgroundColor: 'blue',
                        width: 150,
                        marginLeft: '10%',
                        justifyContent: 'center',
                      }}>
                      <Icon type="FontAwesome" name="facebook-official" />
                      <Text>Facebook</Text>
                    </Button>
                    <Button
                      style={{
                        backgroundColor: 'skyblue',
                        width: 150,
                        marginLeft: '10%',
                        justifyContent: 'center',
                      }}>
                      <Icon type="FontAwesome" name="twitter" />
                      <Text>Twitter</Text>
                    </Button>
                    <Button
                      style={{
                        backgroundColor: 'red',
                        width: 150,
                        marginLeft: '10%',
                        justifyContent: 'center',
                      }}>
                      <Icon type="FontAwesome" name="google" />
                      <Text>Gmail</Text>
                    </Button>
                  </View>
                </View>
              </Body>
            </CardItem>
            <CardItem footer bordered style={{backgroundColor: 'steelblue'}}>
              <Button
                success
                style={misEstilos.boton}
                onPress={() =>
                  navigation.navigate('Ins', {
                    name: this.state.name,
                    pass: this.state.pass,
                  })
                }>
                <Text>REGISTRAR</Text>
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
    backgroundColor: 'lightgray',
  },
  boton: {
    flex: 1,
    margin: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
});
