//import { IonToolbar } from "@ionic/react"

import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, useIonRouter, IonIcon } from "@ionic/react";
import { supabase } from "../library/supabaseClient";
import { logoGoogle } from "ionicons/icons";


const Login:React.FC = () => {
    const navigation =useIonRouter();

    const doLogin = () => {
        navigation.push('/app', 'forward', 'replace');
    };
     const signInWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options:{
                redirectTo: '${window.location.origin}/app'
            }
        });
     };
    
    
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                      <IonButtons slot= "start">
                           <IonMenuButton></IonMenuButton>                          
                      </IonButtons>
                      <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonButton expand="full" onClick={signInWithGoogle} fill="outline">
                    <IonIcon icon={logoGoogle} />
                    Continue via Google,
                
                </IonButton>
            </IonContent>
        </IonPage>
           

    );
}

export default Login;
