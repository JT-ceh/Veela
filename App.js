import React, {useRef, useEffect,useState } from 'react';
import {ActivityIndicator,Alert,KeyboardAvoidingView,TextInput,Platform,Button,Image,Modal,Picker,ScrollView,StatusBar,DrawerLayoutAndroid,ToastAndroid,
        StyleSheet,Switch,Text,Keyboard,AsyncStorage,Vibration,View,Pressable, ImageBackground, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Chip, Divider, ToggleButton,Menu } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Behaviour from './src/behaviour';import About from './src/about';
import Browser from './src/browser';import Settings from './src/settings';
import {greet,help,nul,rHappy,rSad,join,sing,come,dance,wont,didGood,love,gn,morning,miss,marry,els} from './mind/da.json';
const moods=[greet,help,nul,rHappy,rSad,join,sing,come,dance,wont,didGood,love,gn,morning,miss,marry,els];
const myColor="#0E100F";const tintC="#0069FF"
export default function App() {
  const Stack=createNativeStackNavigator();const drawer=useRef(null);const scroll=useRef(null);const rez=useRef(null);const [m, setM] = useState(false);const [b, setB] = useState(false);
  const [myColor,setColor]=useState("#0E100F");const [mytheme,setTheme]=useState("dark"); //useEffect(()=>mytheme=="dark"?setColor("#0E100F"):setColor("#0E100F"))
  const Chat=({navigation})=>{
  const [msg, setMsg] = useState('Hey there');const [bubbles, addBubble] = useState([<Send ms={msg}/>]);const [dec, setDec] = useState(true);const [suggestions,setSug]=useState([]);
  const [on, setOff]=useState(true);const [value, resValue]=useState('');const [status, setStatus]=useState(false);const [rp,setRp]=useState('');const scrol=useRef();
  const exitApp=()=>{Alert.alert("Exit App","Are you sure you want to exit the app?",[{text:'Cancel',onPress:()=>null,style:'cancel'},{text:'Yes',onPress:()=>BackHandler.exitApp()}]);return true;}
  function b(){BackHandler.addEventListener("hardwareBackPress",exitApp);return()=>BackHandler.removeEventListener("hardwareBackPress",exitApp);};b()
  //useEffect(()=>DA(value,setMsg,rp,setRp,setSug))
  setTimeout(()=>setOff(false),3000);setTimeout(()=>setStatus(true),5000)
  const [drawerPosition, setDrawerPosition] = useState('left');const [rec,setRec]=useState('unchecked');const recording=()=>{setRec(rec==='checked'?'unchecked':'checked');ToastAndroid.showWithGravity(rec==='unchecked'?"Voice chat activated":"Voice chat deactivated",ToastAndroid.SHORT,ToastAndroid.CENTER);}
  const changeDrawerPosition=()=>{if(drawerPosition==='left'){setDrawerPosition('right')}else{setDrawerPosition('left')}};
  const navigationView=()=>(
    <View style={[styles.lay,{justifyContent:'center',alignContent:'center'}]}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Image style={{flex:1,resizeMode:'contain'}} source={require("./src/img/da-small.jpg")}/></View>
      {[{nav:'Home',icon:'home'},{nav:'Behaviour',icon:'account-edit'},{nav:'Browser',icon:'web'},{nav:'Settings',icon:'web'},{nav:'About',icon:'account-box'}]
      .map((d,k)=>(<View key={k}><Pressable style={styles.drawerItem} onPress={() =>{drawer.current.closeDrawer();navigation.navigate(d.nav)}}>
        <Icon name={d.icon} size={25} color='#0069ff' style={{ margin: 4 }} />
        <Text style={styles.dtext}>{d.nav}</Text>
        <Icon name="greater-than" size={15} color='#0069ff' style={{ margin: 5 }}/>
     </Pressable><Divider color='#0069ff' width={280}/></View>))}
     <ToggleButton icon="sun-wireless-outline" value="Changing theme" color='#0069ff' accessibilityLabel='Theme Changed' status={rec} style={{marginHorizontal:4}} onPress={()=>mytheme=="dark"?setColor("#0E100F"):setColor("#0E100F")}/>
      <Button title="Close drawer" onPress={() => drawer.current.closeDrawer()}/></View>);
  return (
  <DrawerLayoutAndroid ref={drawer} drawerWidth={300} drawerPosition={drawerPosition} renderNavigationView={navigationView} style={{flex:1}}>
  <KeyboardAvoidingView style={{flex:1}} keyboardVerticalOffset={5}>
    <View style={styles.lay}>
      <StatusBar backgroundColor={myColor} barStyle='light-content'/>
      <Modal style={{flex:1,justifyContent:'center',alignItems:'center'}} visible={on}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ImageBackground style={{flex:1,resizeMode:'contain',width:'100%'}} source={require("./src/img/da.jpg")}><ActivityIndicator style={{flex:1,width:'100%'}} size='large' color={myColor}/></ImageBackground>
        </View>
      </Modal>
        <View style={styles.chat}><Text style={styles.date}>{new Date().toDateString()}</Text><ScrollView style={{flex:1}} ref={scroll}>{bubbles.map((bubble,k)=><View key={k}>{bubble}</View>)}</ScrollView></View>
        <View style={styles.suggestion}><ScrollView showsHorizontalScrollIndicator={false} style={{flex:1,padding:5,backgroundColor:'#0e100f'}} horizontal>{suggestions.map((sug,k)=><Chip key={k} style={styles.chip} mode='outlined' icon={'close'} onPress={()=>{DA(value, setMsg,rp,setRp,setSug);addBubble((pr)=>[...pr,<Receive txt={sug}/>]);resValue(sug);addBubble((pr)=>[...pr,<Send ms={msg}/>]);rez.current.clear();scroll.current.scrollToEnd({animated: true});resValue('')}}>{sug}</Chip>)}</ScrollView></View>
        <View style={styles.footer}>
        <ToggleButton icon="microphone" value="recording" color={tintC} accessibilityLabel='Speech mode activated' status={rec} style={{flex:1,marginHorizontal:4}} onPress={recording}/>
          <View style={styles.mgview}><TextInput ref={rez} multiline scrollEnabled={true} placeholder="Type your message" onChangeText={(v)=>resValue(v)}/></View>
          <Pressable style={styles.pressa} onPress={()=>{addBubble((pr)=>[...pr,<Receive txt={value}/>]);DA(value, setMsg,rp,setRp,setSug);resValue('');addBubble((pr)=>[...pr,<Send ms={msg}/>]);rez.current.clear();scroll.current.scrollToEnd({animated: true});}}>
            <Icon name="send" size={30} color={tintC}/>
          </Pressable>
        </View>
    </View>
    </KeyboardAvoidingView>
    </DrawerLayoutAndroid>
  );
}
  const options={
    all:{
      headerStyle:{backgroundColor:'#0E100F'},headerTintColor:'#0069FF',headerTitleStyle:{color:{tintC}, fontWeight:'bold',alignSelf:'center'},},
    home:{title:'Digital Angel',
      headerRight:()=>(
        <View style={{flexDirection: 'row',alignItems:'center',justifyContent: 'center'}}>
          <Menu visible={m} onDismiss={() => setM(false)}anchor={<Icon color={tintC} size={30} name="dots-vertical" onPress={()=>setM(true)}/>}>
              <Menu.Item onPress={()=>{}} title="Make a Donation" />
              <Menu.Item onPress={()=>{}} title="Share" />
              <Divider />
              <Menu.Item onPress={()=>{}} title="About us"/>
          </Menu></View>),
      headerLeft:()=><Icon style={{marginRight:90}} color={tintC} size={30} name="currency-eth" onPress={()=>drawer.current.openDrawer()}/>,
    },
    about:{
      title:'About her',
      headerRight:()=>(
        <View style={{flexDirection: 'row',alignItems:'center',justifyContent: 'center'}}>
          <Icon color={tintC} size={30} name="dots-vertical"/><Icon color={tintC} size={30} icon="heart" /></View>),
    },
    behaviour:{
      title:'Behaviour',
      headerRight:()=>(
        <View style={{flexDirection: 'row',alignItems:'center',justifyContent: 'center'}}>
         <Menu visible={b} onDismiss={()=>setB(false)} anchor={<Icon color={tintC} size={30} name="dots-vertical" onPress={()=>setB(true)}/>}>
              <Menu.Item onPress={()=>{}} title="Make a Donation"/>
              <Menu.Item onPress={()=>{}} title="Share"/>
              <Divider/>
              <Menu.Item onPress={()=>{}} title="About us"/>
          </Menu>
          <Icon color={tintC} size={30} icon="heart"/></View>),
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options.all}>
        <Stack.Screen name="Home" component={Chat} options={options.home}/>
        <Stack.Screen name="About" component={About} options={options.about}/>
        <Stack.Screen name="Behaviour" component={Behaviour} options={options.behavior}/>
        <Stack.Screen name="Browser" component={Browser}/>
        <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Send=(props)=>{
  return(
    <View style={{flexDirection:'row',margin:10,maxWidth:'75%'}}>
      <Icon name="emoticon" color={myColor} size={25}/>
      <View style={styles.sendMsg}>
        <Text style={{color: '#0069ff'}}>{props.ms}</Text>
        <Text style={{marginTop:10,alignSelf:'flex-end',color: '#0069ff'}}>{new Date().toLocaleTimeString()}</Text>
      </View>
    </View>
  );
};

const Receive=(props)=>{
  return(
    <View style={{ flexDirection: 'row-reverse', margin: 10 }}>
      <Icon name="emoticon-excited" color={myColor} size={25}/>
      <View style={styles.recMsg}>
        <Text style={{ color: '#0069ff',maxWidth:250, }}>{props.txt}</Text>
        <Text style={{marginTop:10, alignSelf:'flex-end',color: '#0069ff'}}>{new Date().toLocaleTimeString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lay: { flex: 1,backgroundColor:'#0e100f' },
  chat: { flex: 9,backgroundColor:'#0069FF'},
  footer: {flex:1,alignItems: 'center',justfyContent: 'space-between',flexDirection: 'row',marginBottom: 1,maxHeight:50,backgroundColor:'#0e100f',borderRadius:999},
  suggestion: {marginHorizontal:5,alignItems: 'center',justfyContent: 'space-between',flexDirection: 'row',backgroundColor:'#0e100f'},
  date:{opacity:0.8,borderRadius: 999,padding: 3,margin:3, backgroundColor:'#0E100F',width:150,alignSelf: 'center',textAlign:'center'},
  barIcons: { flex: 1, flexDirection: 'row-reverse' },
  title: { fontWeight: 'bold', fontSize: 18 },
  chip:{backgroundColor:'#0E100F',color:'#0069FF',marginHorizontal:2},
  dtext: { marginLeft:10,color:'#0069ff',fontWeight: 'bold', fontSize: 18, flex:1},
  mgview: {marginHorizontal: 0,justifyContent: 'center',flexDirection: 'column',flex: 8,backgroundColor: '#0E100F',paddingHorizontal: 0,borderRadius: 999},
  pressa:{flex:1,marginHorizontal: 3},
  drawerItem: {alignItems: 'center',justfyContent: 'space-between',flexDirection: 'row',marginVertical:10,marginHorizontal:10},
  sendMsg: {elevation:15,backgroundColor: '#0E100F',borderRadius: 15,padding: 10,marginLeft: -5,},
  recMsg: {elevation:15,backgroundColor: '#0E100F',borderRadius: 15,padding: 10,marginRight: -5,}
});

const DA=(value,setMsg,rp,setRp,setSug)=>{
  let ex=value;
  const process=function(){ex=ex.trim().toLowerCase().split('').filter(f=>f!==' '&&f!==',');ex=[...new Set(ex)]}();
  let found=0;
  function think(mood){
    function send(m){setRp(m.rp[Math.floor(Math.random()*m.rp.length)]);found=1;setSug(m.sug)}
    const neuron1=function(){ 
      if(mood.keys.split('').every(r=>ex.includes(r))){send(mood)}else{
        const neuron2=function(){
          let t=new RegExp(mood.keys1)
          if(t.test(value)!=-1){send(mood)}else{
            const neuron3=function(){
              let f=0;
              mood.keys1.split(',').forEach((m)=>{
                let tmp=new RegExp(m)
              if(tmp.test(value)){send(m)}else{
                setRp(els.rp[Math.floor(Math.random()*els.rp.length)]);found=0;setSug(els.sug)
              }})
      }();}}();
  }}();}
  moods.forEach((m)=>{!found&&think(m);setMsg(rp)})
  found=0;
}
