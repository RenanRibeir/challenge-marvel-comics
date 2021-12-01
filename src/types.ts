export interface Generic{
	id: string;
	thumbnail:{
	  path: string;
	  extension: string;
	}
	name?: string;
	title?: string;
	description?: string;
	authors?: string[];
	qtd: number;
}