import { http } from './config'

export default	{

	salvar:(doctor)=>{
		return http.post('doctors',doctor);
  },
    
	atualizar:(doctor)=>{
		return http.put('doctors',doctor);
  },

  	listar:()=>{
		return http.get('doctors')
  },
    
	apagar:(doctor)=>{
		return http.delete('doctors', { data: doctor })
	}
}