import * as Yup from 'yup'
import valid from 'card-validator'
import { RegExp } from './helper'

export const FormInitialState = {
	cadastroDados: {
		nome: '',
		nomeCompleto: '',
		eMail: '',
		confirmEmail: '',
		telefone: '',
		meuPedido: '',
	},

	pagamento: {
		titularCartao: '',
		numeroCartao: '',
		dataDeValidade: '',
		codigoSeguranca: '',
	},

	userDados: {
		nome: '',
		eMail: '',
		telefone: '',
		senha: '',
		senhaConfirma: '',
	},

	login: {
		email: '',
		password: ''
	},

	orcamento: {
		nome: '',
		eMail: '',	
		telefone: '',
		CheckInCheckOut: '',
		obersvacoes: '',
		hotel: ''
	}
}

export const validationDados = Yup.object().shape({
	nome: Yup.string().required('Campo Obrigatório'),
	eMail: Yup.string().email('Insira um E-mail válido').required('E-mail e um campo obrigatório'),
	confirmEmail: Yup.string().oneOf([Yup.ref('eMail'), null], 'E-mail Não Confere'),
	telefone: Yup.string().matches(RegExp.phone, 'O número de telefone não é válido'),
	nomeCompleto: Yup.string(),
	meuPedido: Yup.string(),
	senha: Yup.string().required('Campo Obrigatório'),
	senhaConfirma: Yup.string().oneOf([Yup.ref('senha'), null], 'Senha Não Confere'),
})

export const validationPagamento = Yup.object().shape({
	titularCartao: Yup.string().required('Campo Obrigatório'),
	numeroCartao: Yup.string().test('test-number', 'O número do cartão de crédito não é válido', value => valid.number(value).isValid).required(),
	dataDeValidade: Yup.string().required('Campo Obrigatório'),
	codigoSeguranca: Yup.number().required('Campo Obrigatório'),
})

export const validadtionUserDados = Yup.object().shape({
	nome: Yup.string().required('Campo Obrigatório'),
	eMail: Yup.string().email('Insira um E-mail válido').required('E-mail e um campo obrigatório'),
	telefone: Yup.string().matches(RegExp.phone, 'O número de telefone não é válido').required('Número de Telefone é obrigatorio'),
	senha: Yup.string().required('Campo Obrigatório'),
	senhaConfirma: Yup.string().oneOf([Yup.ref('senha'), null], 'Senha Não Confere'),
})

export const validationLogin = Yup.object().shape({
	email: Yup.string().required('Campo Obrigatório'),
	password: Yup.string(),
})

export const validadtionOrcamento = Yup.object().shape({
	nome: Yup.string().required('Campo Obrigatório'),
	eMail: Yup.string().email('Insira um E-mail válido').required('E-mail e um campo obrigatório'),
	telefone: Yup.string().matches(RegExp.phone, 'O número de telefone não é válido').required('Número de Telefone é obrigatorio'),
	CheckInCheckOut: Yup.string().required('Campo Obrigatório'),
	obersvacoes: Yup.string(),
	hotel: Yup.string().required('Campo Obrigatório'),
})