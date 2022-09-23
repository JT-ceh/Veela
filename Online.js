import Chat from 'react-native-dialogflow-text-voice-chat';
import { dialogFlowConfig } from './flow/default';

export default function Online(){
    return(
    <Chat dialogFlowConfig={dialogFlowConfig} />
    );
}