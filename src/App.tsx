import './App.css'
import { useEffect } from 'react'

function App() {
  const googleClientid = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  useEffect(()=>{
    const sdkgoogle = document.createElement('script');
    sdkgoogle.src ="https://accounts.google.com/gsi/client";
    sdkgoogle.async = true;
    sdkgoogle.defer = true;

    document.body.appendChild(sdkgoogle);

    return () => {
      document.body.removeChild(sdkgoogle);  // Limpiar el script cuando el componente se desmonte
    };
  },[]);

  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',height:'500px'}}>
      <h1>Google auth</h1>

      <div id="g_id_onload"
          data-client_id={googleClientid}
          data-auto_prompt="false"
          data-callback="handleCredentialResponse"
        >
      </div>
      <div className="g_id_signin"
          data-type="standard"
          data-size="large"
          data-theme="outline"
          data-text="sign_in_with"
          data-shape="rectangular"
          data-logo_alignment="left">
      </div>
    </div>
  )
}

export default App
