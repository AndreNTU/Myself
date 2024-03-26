import { StyleSheet, Text, View } from 'react-native'
import {React, useContext} from 'react'

import { UserType } from '../userContext'

const User = (item) => {
    const { userId, setUserId } = useContext(UserType)
    console.log (userId)

    return (
        <View>
          <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
          }}
        />

        <Text style={{ fontSize: 15, fontWeight: "500", flex: 1 }}>
          {item?.name}
        </Text>
        </View>
    )
}

export default User