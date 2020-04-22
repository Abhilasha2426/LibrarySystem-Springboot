package com.capgemini.librarymanagementsystemuser.dao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.capgemini.librarymanagementsystemuser.dto.BookInfo;
import com.capgemini.librarymanagementsystemuser.dto.BookRegister;
import com.capgemini.librarymanagementsystemuser.dto.Issue;
import com.capgemini.librarymanagementsystemuser.dto.UserInfoBean;

import lombok.extern.java.Log;

@Log
@Repository
public class UserDAOImpl implements UserDAO {

	public static int regId=0;
	
	@PersistenceUnit
	private EntityManagerFactory factory;
	
	@Override
	public List<BookInfo> searchBook(BookInfo bookInfo) {
		List<BookInfo> bookInfos = null;
		try {
			EntityManager entityManager = factory.createEntityManager();
			TypedQuery<BookInfo> typedQuery = entityManager.createQuery("FROM BookInfo where bookName = :bookName", BookInfo.class);
			typedQuery.setParameter("bookName", bookInfo.getBookName());
			bookInfos = typedQuery.getResultList();
		}catch(Exception e) {
			log.info(e.getMessage());
			for (StackTraceElement element : e.getStackTrace()) {
				log.info(element.toString());
			}
		}
		return bookInfos;
	}
	
	
	@Override
	public int requestBook(int bookId, String userName) {
		EntityManager entityManager = factory.createEntityManager();
		BookRegister bookRegister = new BookRegister();
		TypedQuery<UserInfoBean> query = entityManager.createQuery("from UserInfoBean  where username =: userName", UserInfoBean.class);
		query.setParameter("userName", userName);
		//		int  userId= query.getSingleResult().getUserId();
		bookRegister.setUserId(query.getSingleResult().getUserId());
		bookRegister.setBookId(bookId);
		bookRegister.setRegisterDate(new Date());
		Random random = new Random();
		bookRegister.setRegisterId(random.nextInt(5000));
		try {

			entityManager.getTransaction().begin();
			entityManager.persist(bookRegister);
			entityManager.getTransaction().commit();
			regId=bookRegister.getRegisterId();
			System.err.println("registerId"+regId);
			entityManager.close();
		} catch (Exception e) {
			log.info(e.getMessage());
			for (StackTraceElement element : e.getStackTrace()) {
				log.info(element.toString());
			}
		}
		return bookRegister.getRegisterId();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

//	@Override
//	public Boolean requestBook(int bookId) {
//		boolean isRequested = false;
//		try {
//			EntityManager entityManager = factory.createEntityManager();
//			entityManager.getTransaction().begin();
//			BookRegister bookRegister = new BookRegister();
//			BookInfo bookInfo = null;
////			Integer userId = 0;
//			bookRegister.setUserId(bookInfo.getUserId());
////			bookRegister.setUserId(userId);
//			bookRegister.setBookId(bookId);
//			bookRegister.setRegisterDate(new Date());
//			Random random = new Random();
//			bookRegister.setRegisterId(random.nextInt(5000));
//			entityManager.persist(bookRegister);
//			entityManager.getTransaction().commit();
//			isRequested=true;
//			entityManager.close();
//		}catch(Exception e) {
//			log.info(e.getMessage());
//			for (StackTraceElement element : e.getStackTrace()) {
//				log.info(element.toString());
//			}
//		}
//		return isRequested;
//	}
//
//	
	

//	@Override
//	public Issue requestBook(BookInfo book, int userId) {
//
//		EntityManager manager = factory.createEntityManager();
//		EntityTransaction transaction = manager.getTransaction();
//		transaction.begin();
//		String jpql = "from BookIfo where bookId =: bookId";
//		TypedQuery<BookInfo> query=manager.createQuery(jpql,BookInfo.class);
////		Query query = manager.createQuery(viewDetails);
//		query.setParameter("bookId", book.getBookId());
//		BookInfo books= query.getSingleResult();
//
//		Issue reg = new Issue();
//		reg.setBookId(books.getBookId());
//
//		Date date = new Date();
//		reg.setIssueDate(date);
//
//		reg.setUserId(userId);
//
//		manager.persist(reg);
//		transaction.commit();
//
//		return reg;
//	}
//
//	@Override
//	public boolean borrow(int userId, String bookName) {
//		EntityManager manager = factory.createEntityManager();
//		EntityTransaction transaction = manager.getTransaction();
//		transaction.begin();
//		// UserInfoBean userInfoBean= (UserInfoBean) manager.createQuery("from
//		// UserInfoBean where userId=:userId").setParameter("userId",
//		// userId).getSingleResult();
//		BookInfo bookInfo = (BookInfo) manager.createQuery("from BookInfo where bookName=:bookName")
//				.setParameter("bookName", bookName).getSingleResult();
//		bookInfo.setUserId(userId);
//		List<Issue> issue = manager.createQuery("from Issue where transactionId=0 and userId=:userId")
//				.setParameter("userId", userId).getResultList();
//		if (issue.size() <= 3) {
//			Issue issues = new Issue();
//			issues.setBookId(bookInfo.getBookId());
//			issues.setIssueDate(new Date());
//			long lTime = new Date().getTime() + 15 * 24 * 60 * 60 * 1000;
//			SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
//			try {
//				issues.setReturnDate(sdf.parse(sdf.format(new Date(lTime))));
//			} catch (ParseException e) {
//				e.printStackTrace();
//			}
//			issues.setTransactionId(0);
//			issues.setUserId(userId);
//			manager.persist(issues);
//			transaction.commit();
//			return true;
//		} else {
//			System.out.println("book limited exceeded");
//			return false;
//		}
//	}

}
