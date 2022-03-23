import { View, Text } from 'dripsy'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import TokensScreen from "../../../../apps/next/pages/token/index"
const { useParam } = createParam<{ id: string }>()

export function TScreen() {
  const [id] = useParam('id')

  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <TokensScreen /> */}
      <Text
        sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
      >{`My Bookings`}</Text>

      <TextLink href="/token/">👈 Go to my bookings</TextLink>
    </View>
  )
}
