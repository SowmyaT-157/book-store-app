
// const REGISTERED_USERS = "registered_users"
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
export const users: User[] = [
  {
    id: '1',
    name: 'Sowmya',
    email: 'sowmya@gmail.com',
    password: '123',
  },
  {
    id: '2',
    name: 'pandu',
    email: 'pandu@gmail.com',
    password: '123',
  },
  {
    id: '3',
    name: 'nani',
    email: 'nani@gmail.com',
    password: '123',
  },
  {
    id: '4',
    name: 'vani',
    email: 'vani@gmail.com',
    password: '123',
  },
  {
    id: '5',
    name: 'vijji',
    email: 'vijji@gmail.com',
    password: '123',
  },
  {
    id: '6',
    name: 'manju',
    email: 'manju@gmail.com',
    password: '123',
  },
  {
    id: '7',
    name: 'yoga',
    email: 'yoga@gmail.com',
    password: '123',
  },

];
export default User;

// const addNewUser = (user.UserDetails) =>{
//   const userStr = localStorage.getItem(REGISTERED_USERS) || "[]";
//   const users = JSON.parse(userStr) as UserDetails[];
//   users.push(user);

//   localStorage.setItem(REGISTERED_USERS, JSON.stringify(users))
// };

// const alreadyRegistered = (username:string) =>{
//   const userStr = localStorage.getItem(REGISTERED_USERS) || null;
//   if(userStr == null) return false;
//   const users = JSON.parse(userStr) as UserDetails[];
//   const fountUser = users.find(u => u.username == username );
//   return foundUser  != null;

// }

// export {addNewUser,alreadyRegistered };


  // const [data,setData] = useState<UserDetails>({name:"",email:"",password:""});
  // const [message,setMessage] = useState<string>("")

  // const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  //   const id = event.target.id;
  //   const value = event.target.value

  //   setData({...data, [id]: value});
  // };
  // const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if(data.name ==="" || data.email === "" || data.password === ""){
  //     setMessage("please fill the form")
  //     return
  //   }
  //   if(alreadyRegistered(data.username)){
  //     setMessage("user already exist")
  //     return;
  //   }
  //   addNewUser(data)
  //   setData()
  // }
