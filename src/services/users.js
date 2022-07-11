import { http } from './config'

export default	{

	salvar:(user)=>{
		return http.post('users',user);
  },
    
	atualizar:(user)=>{
		return http.put('users',user);
  },

  	listar:()=>{
		return http.get('users')
  },
    
	apagar:(user)=>{
		return http.delete('users', { data: user })
	}
}