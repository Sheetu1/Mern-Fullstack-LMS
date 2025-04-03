
import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs"
import React, {useState} from 'react'

export function Auth() {
    const [signup, setSignup] = useState({
        UserName: "",
        Email: "",
        Password: "",
    });

    const [login, setLogin] = useState({
        Email: "",
        Password: "",
    });

    const changeInputHandler = (e,type) => {
        const {name,value} = e.target;
        if(type === "signup"){
            setSignup({...signup, [name]:value});
        }
        else{
            setLogin({...login, [name]:value});
        }
    }

    const handleRegistration = (type) => {
       const inputData = type === "signup" ? signup : login;
       console.log(inputData);
    }

  return (
   <div className="w-full flex items-center justify-center ">
     <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Signup">Signup</TabsTrigger>
        <TabsTrigger value="Login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="Signup">
        <Card>
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>
              Create a new account and click signup when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">UserName</Label>
              <Input 
              type="text"
              name="UserName"
              value={signup.UserName}
              onChange={(e)=> changeInputHandler(e, "signup")}
               placeholder="Enter your username" 
               required="true" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Email</Label>
              <Input 
              type="email" 
              name="Email"
              value={signup.Email}
              onChange={(e)=> changeInputHandler(e, "signup")}
              placeholder="Enter your email"
               required="true" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input 
               type="password"
              name="Password"
              value={signup.Password}
               onChange={(e)=> changeInputHandler(e, "signup")}
                placeholder="Enter your password" 
                required="true" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={()=> handleRegistration("signup")}>Signup</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Login">
        <Card>
          <CardHeader>
            <CardTitle>Lgoin</CardTitle>
            <CardDescription>
              login and password here. After signup, you'll be logged in.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Email</Label>
              <Input
               type="Email"
              name="Email"
              value={login.Email}
              onChange={(e)=> changeInputHandler(e, "login")}
                placeholder="Enter your email" 
                required="true" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input
               type="password"
              name="Password"
              value={login.Password}
               onChange={(e)=> changeInputHandler(e, "login")}
                placeholder="Enter your password"
                 required="true" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleRegistration("login")} >Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
   </div>
  )
}
