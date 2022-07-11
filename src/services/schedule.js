import { http } from './config'

export default	{

	salvar:(schedule)=>{
		return http.post('schedules',schedule);
  },
    
	atualizar:(schedule)=>{
		return http.put('schedules',schedule);
  },

  	listar:()=>{
		return http.get('schedules')
  },
    
	apagar:(schedule)=>{
		return http.delete('schedules', { data: schedule })
	}
}