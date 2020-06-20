import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, FlatList, ScrollView, StatusBar, TouchableOpacity, Switch } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ViewPager from '@react-native-community/viewpager'
import {ProgressBar} from '@react-native-community/progress-bar-android'


export default function App() {


  const [toggleSwitch, setToggleSwitch] = useState(false)

  const  spiderman = ['Spiderman', 2, 5, 3, 3]
  const  hulk = ['Hulk', 5, 2, 4, 2]
  const  ironman = ['Ironman', 2, 3, 3, 5]


  
  return (
    <ScrollView style={[styles.mainContainer, toggleSwitch? {backgroundColor: '#fff'} : {backgroundColor: '#111'}]}>
      <StatusBar
      backgroundColor='#ff0000'
      />
      <View style={[styles.switchThemeContainer, {marginRight: 8}]}>
        <Text style={{marginRight: 10, fontSize: 18}}> {toggleSwitch == false? '🌃' : '💡'} </Text>
      <Switch
      value={toggleSwitch}
      onValueChange={val => setToggleSwitch(val)}
      trackColor='#bb0000'
      thumbColor='#ff0000'
      />
      </View>
      <Text style={styles.titleMarvel}>MARVEL</Text>
      <Text style={styles.text}>Welcome to Marvel Heoroes</Text>
      <Text style={[styles.title, toggleSwitch? {color: '#111'} : {color: '#fff'}]}>Chose your favorite hero.</Text>
        <View style={[styles.divider, {marginBottom: 10, marginTop: 10}]}></View>
      <View style={styles.avatarContainer}>
      <Image source={require('./assets/spiderman-avatar.jpg')} style={styles.avatar}/>
      <Image source={require('./assets/hulk-avatar.jpg')} style={styles.avatar}/>
      <Image source={require('./assets/ironman-avatar.jpg')} style={styles.avatar}/>
      </View>
      <ScrollView>
      <ViewPager style={styles.infoContainer} initialPage={0}>
        <View key='1'>

          <Text style={styles.text}>Swipe to see your heroes ➡</Text>
        </View>
        <View key='2'>
            <Text style={[styles.title, toggleSwitch? {color: '#111'} : {color: '#fff'}]}>{spiderman[0]}</Text>
            <Image source={ require('./assets/spiderman.jpg')} style={styles.imageInfo}/>
            <Text style={[styles.text, {marginBottom: 3, fontWeight: 'bold'}]}>Force: {spiderman[1]} </Text>
            <ProgressBar
            styleAttr='Horizontal'
            color='red'
            progress={0.4}
            indeterminate={false}
            style={{width: '50%', height: 2, margin: 2}}
            />
            <Text style={[styles.text, {marginBottom: 3, fontWeight: 'bold'}]}>Speed: {spiderman[2]}</Text>
            <ProgressBar
            styleAttr='Horizontal'
            color='red'
            progress={1}
            indeterminate={false}
            style={{width: '50%', height: 2, margin: 2}}
            />

            <Text style={[styles.text, {marginBottom: 3, fontWeight: 'bold'}]}>Energy: {spiderman[3]}</Text> 
            <ProgressBar
            styleAttr='Horizontal'
            color='red'
            progress={.6}
            indeterminate={false}
            style={{width: '50%', height: 2, margin: 2}}
            />

            <Text style={[styles.text, {marginBottom: 3, fontWeight: 'bold'}]}>Inteligence: {spiderman[4]} </Text>
            <ProgressBar
            styleAttr='Horizontal'
            color='red'
            progress={.6}
            indeterminate={false}
            style={{width: '50%', height: 2, margin: 2}}
            />

        </View> 
        <View key='3'>
        <Text style={[styles.title, toggleSwitch? {color: '#111'} : {color: '#fff'}]}>{hulk[0]}</Text>
            <Image source={ require('./assets/hulk.jpg')} style={styles.imageInfo}/>
            <Text style={[styles.text, {marginBottom: 3, fontWeight: 'bold'}]}>Force: {hulk[1]} </Text>
                <ProgressBar
            styleAttr='Horizontal'
            color='green'
            progress={1}
            indeterminate={false}
            style={{width: '50%', height: 2, margin: 2}}
            />

            <Text style={[styles.text, {marginBottom: 3, fontWeight: 'bold'}]}>Speed: {hulk[2]}</Text>
                <ProgressBar
            styleAttr='Horizontal'
            color='green'
            progress={.4}
            indeterminate={false}
            style={{width: '50%', height: 2, margin: 2}}
            />

            <Text style={[styles.text, {marginBottom: 3, fontWeight: 'bold'}]}>Energy: {hulk[3]}</Text> 
                <ProgressBar
            styleAttr='Horizontal'
            color='green'
            progress={.8}
            indeterminate={false}
            style={{width: '50%', height: 2, margin: 2}}
            />

            <Text style={[styles.text, {marginBottom: 3, fontWeight: 'bold'}]}>Inteligence: {hulk[4]} </Text>
                <ProgressBar
            styleAttr='Horizontal'
            color='green'
            progress={.4}
            indeterminate={false}
            style={{width: '50%', height: 2, margin: 2}}
            />

        </View> 
        <View key='4'>
        <Text style={[styles.title, toggleSwitch? {color: '#111'} : {color: '#fff'}]}>{ironman[0]}</Text>
            <Image source={ require('./assets/ironman.jpg')} style={styles.imageInfo}/>
            <Text style={[styles.text, {marginBottom: 3, fontWeight: 'bold'}]} >Force: {ironman[1]} </Text>
            <ProgressBar
            styleAttr='Horizontal'
            color='orange'
            progress={.4}
            indeterminate={false}
            style={{width: '50%', height: 2, margin: 2}}
            />
            <Text style={[styles.text, {marginBottom: 3, fontWeight: 'bold'}]} >Speed: {ironman[2]}</Text>
            <ProgressBar
            styleAttr='Horizontal'
            color='orange'
            progress={.6}
            indeterminate={false}
            style={{width: '50%', height: 2, margin: 2}}
            />
            <Text style={[styles.text, {marginBottom: 3, fontWeight: 'bold'}]} >Energy: {ironman[3]}</Text> 
            <ProgressBar
            styleAttr='Horizontal'
            color='orange'
            progress={.6}
            indeterminate={false}
            style={{width: '50%', height: 2, margin: 2}}
            />
            <Text style={[styles.text, {marginBottom: 3, fontWeight: 'bold'}]} >Inteligence: {ironman[4]} </Text>
            <ProgressBar
            styleAttr='Horizontal'
            color='orange'
            progress={1}
            indeterminate={false}
            style={{width: '50%', height: 2, margin: 2}}
            />
        </View> 
      </ViewPager>
    </ScrollView>
    </ScrollView>
  )
}



/*ISSUES
ICON RENDER
*/
    const styles = StyleSheet.create({
      title:{
        fontSize: 24,
        fontWeight: 'bold'
      },
      text:{
        fontSize: 16,
        color: '#777'
      },
      mainContainer:{
        flex: 1,
        padding: 10,
      },
      titleMarvel:{
        fontSize: 28,
        color: 'red',
        fontWeight: 'bold',
        letterSpacing: 1.5,
      },
      divider:{
        width: '100%',
        height: 1,
        backgroundColor: '#777'
      },
      avatar:{
        width: 80,
        height: 80,
        borderRadius: 100
      },
      avatarContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginLeft: -16
      },
      avatarTitleContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: -25,
        marginTop: 3
      },
      avatarTitle:{
        fontSize: 14,
        color: '#777'
      },
      infoContainer:{
        flex: 1,
        padding: 10,
        height: 450,
        marginTop: '2%',
        marginBottom: 10
      },
      imageInfo:{
        width: 200,
        height: 250,
        alignSelf: 'center',
        borderRadius: 4,
        margin: 10,
        marginBottom: 20
      },
      textInfo:{
        fontSize: 18,
        color: '#222',
        margin: 5
      },
      switchThemeContainer:{
        flex: .25,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 3
      }
    })