import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MyBookingsScreen } from 'app/features/mybookings/mybookings-screen'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  mybookings: any
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
       <Stack.Screen
        name="mybookings"
        component={MyBookingsScreen}
        options={{
          title: 'My Bookings',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  )
}
