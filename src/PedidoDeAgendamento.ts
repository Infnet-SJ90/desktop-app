export class PedidoDeAgendamento
{
	private _pedidoDeAgendamentoId : number;
	public get pedidoDeAgendamentoId(): number
	{
		return this._pedidoDeAgendamentoId;
	}
	public set pedidoDeAgendamentoId(value: number)
	{
		this._pedidoDeAgendamentoId = value;
	}

	private _status: string;
	public get status(): string
	{
		return this._status;
	}
	public set status(value: string)
	{
		this._status = value;
	}

	private _nomeDoCidadao : string;
	public get nomeDoCidadao(): string
	{
		return this._nomeDoCidadao;
	}
	public set nomeDoCidadao(value: string)
	{
		this._nomeDoCidadao = value;
	}

	private _quantidadeDeEntulho : number;
	public get quantidadeDeEntulho(): number
	{
		return this._quantidadeDeEntulho;
	}
	public set quantidadeDeEntulho(value: number)
	{
		this._quantidadeDeEntulho = value;
	}

	private _localidade : string;
	public get localidade(): string
	{
		return this._localidade;
	}
	public set localidade(value: string)
	{
		this._localidade = value;
	}

	private _distancia : number;
	public get distancia(): number
	{
		return this._distancia;
	}
	public set distancia(value: number)
	{
		this._distancia = value;
	}
}
