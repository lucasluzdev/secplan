import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from '../pages/login';
import ForgotPasswordScreen from '../pages/login/forgot-password';
import SignUpScreen from '../pages/login/sign-up';
import UserProfileScreen from '../pages/userProfile';
import HomeScreen from '../pages/home';
import CustomPoliceFormScreen from '../pages/customPoliceForm';
import CustomPoliceListScreen from '../pages/customPoliceList';
import CustomPoliceDetailsScreen from '../pages/customPoliceDetails';
import SecureListScreen from '../pages/secureList';
import SecureDetailsScreen from '../pages/secureDetails';
import SecurateListScreen from '../pages/securateList';
import SecurateDetailsScreen from '../pages/securateDetails';
import NotificationListScreen from '../pages/notificationList';
import NotificationDetailsScreen from '../pages/notificationDetails';
import savedSecureListScreen from '../pages/savedSecureList';
import {primary, textWhite} from '../config/colors';

export default function Routes() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: `${primary}`,
        },
        headerTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Página principal'}}
      />

      <Drawer.Screen
        name="savedSecureListScreen"
        component={savedSecureListScreen}
        options={{title: 'Itens salvos'}}
      />

      <Drawer.Screen
        name="CustomPoliceListScreen"
        component={CustomPoliceListScreen}
        options={{title: 'Seguros customizados'}}
      />

      <Drawer.Screen
        name="SecureListScreen"
        component={SecureListScreen}
        options={{title: 'Seguros'}}
      />

      <Drawer.Screen
        name="SecurateListScreen"
        component={SecurateListScreen}
        options={{title: 'Seguradoras'}}
      />

      <Drawer.Screen
        name="NotificationListScreen"
        component={NotificationListScreen}
        options={{title: 'Notificações'}}
      />

      <Drawer.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{title: 'Meu perfil'}}
      />

      <Drawer.Screen
        name="Sair"
        component={LoginScreen}
        options={{title: 'Sair'}}
      />

      <Drawer.Screen
        name="SecurateDetailsScreen"
        component={SecurateDetailsScreen}
        options={{title: 'Detalhes da seguradora', drawerLabel: ''}}
      />

      <Drawer.Screen
        name="NotificationDetailsScreen"
        component={NotificationDetailsScreen}
        options={{title: 'Detalhes da notificação', drawerLabel: ''}}
      />

      <Drawer.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'Login', drawerLabel: ''}}
      />
      <Drawer.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{title: 'Recuperar senha', drawerLabel: ''}}
      />
      <Drawer.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{title: 'Cadastro', drawerLabel: ''}}
      />

      <Drawer.Screen
        name="CustomPoliceFormScreen"
        component={CustomPoliceFormScreen}
        options={{title: 'Novo seguro customizado', drawerLabel: ''}}
      />

      <Drawer.Screen
        name="CustomPoliceDetailsScreen"
        component={CustomPoliceDetailsScreen}
        options={{title: 'Detalhes do seguro', drawerLabel: ''}}
      />

      <Drawer.Screen
        name="SecureDetailsScreen"
        component={SecureDetailsScreen}
        options={{title: 'Detalhes do seguro', drawerLabel: ''}}
      />
    </Drawer.Navigator>
  );
}
