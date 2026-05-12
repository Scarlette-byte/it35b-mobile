//import { IonToolbar } from "@ionic/react"

import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, useIonRouter } from "@ionic/react";


const Login:React.FC = () => {
    const navigation =useIonRouter();

    const doLogin = () => {
        navigation.push('/app', 'forward', 'replace');
     const signInWithGoogle = aync () =>{
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options:{
                redirectTo: '${window.location.origin}/app'
            }
        })
     }
    }
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
                    Login
                </IonButton>
            </IonContent>
        </IonPage>
           

    );
}

export default Login;