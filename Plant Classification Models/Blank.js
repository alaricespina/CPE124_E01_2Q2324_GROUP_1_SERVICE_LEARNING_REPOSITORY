{showLogin ? (
<Login onToggleLogin={toggleLogin} />
) : showSignUp ? (
<SignUp onToggleSignUp={toggleSignUp} />
) : (
<>
    <Text style={styles.welcomeText}>Welcome!</Text>
    <StatusBar style="auto" />
    
    <TouchableOpacity style={styles.button} onPress={toggleLogin}>
    <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={toggleSignUp}>
    <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
</>
)}

{/* <ImageBackground
            // Should be relative path
            source={require('../pics/PNGtree.png')} // Change Source if Needed
            style={styles.backgroundImage}
            > */}

            <View style={styles.backgroundContainer}>
            <Text>Hello</Text>
            <View style={styles.container}>
                <Image
                source={require('../pics/HBLogo.png')} // Change Source if Needed
                style={styles.logo}
                />
                //Show either the welcome screen, login screen, or sign-up screen based on the state
                /* 
                
                */
            </View>
             
        </View>