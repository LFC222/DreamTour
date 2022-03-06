package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "destino")
public class Destino {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "nomeDestino")
	private String nomeDestino;
	
	@Column(name = "descricao")
	private String descricao;
	
	@Column(name = "dias")
	private int dias;
	
	@Column(name = "preco")
	private double preco;
	
	public Destino() {
		
	}
	
	public Destino(String nomeDestino, String descricao, int dias, double preco) {
	super();
	this.nomeDestino = nomeDestino;
	this.descricao = descricao;
	this.dias = dias;
	this.preco = preco;
}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNomeDestino() {
		return nomeDestino;
	}

	public void setNomeDestino(String nomeDestino) {
		this.nomeDestino = nomeDestino;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public int getDias() {
		return dias;
	}

	public void setDias(int dias) {
		this.dias = dias;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}
	
}
