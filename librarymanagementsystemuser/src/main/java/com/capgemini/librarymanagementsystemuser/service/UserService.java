package com.capgemini.librarymanagementsystemuser.service;

import java.util.List;

import com.capgemini.librarymanagementsystemuser.dto.BookInfo;
import com.capgemini.librarymanagementsystemuser.dto.Issue;

public interface UserService {

	public List<BookInfo> searchBook(BookInfo bookInfo);

	public int requestBook(int bookId, String username);

	// public Boolean requestBook(int bookId);

	// public Issue requestBook(BookInfo book, int userId);
	//
	// public boolean borrow(int userId, String bookName);

	// public boolean book(BookInfo bookInfo);

}
