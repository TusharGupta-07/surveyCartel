package com.example.surveycartel.exceptionhandler;

public class UserFoundException extends Exception {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public UserFoundException() {
		super("User with this Username is already there in DB !! try with another Username. ");
	}
	public UserFoundException(String msg) { super(msg); }
}