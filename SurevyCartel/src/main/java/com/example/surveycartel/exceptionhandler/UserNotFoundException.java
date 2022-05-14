package com.example.surveycartel.exceptionhandler;

public class UserNotFoundException extends Exception {
	public UserNotFoundException() {
		super("User with this Username not found in DB !! ");
	}
	public UserNotFoundException(String msg) { super(msg); }
}