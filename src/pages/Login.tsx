import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenubutton,IonTitle,IonContent, IonButton, useIonRouter } from "@ionic/react";


const Login:React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () =>{
        navigation.push('/app','forward', 'replace');

    }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot= "start">
                    <IonMenubutton></IonMenubutton>
                    <IonButtons>
                        <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    )
}