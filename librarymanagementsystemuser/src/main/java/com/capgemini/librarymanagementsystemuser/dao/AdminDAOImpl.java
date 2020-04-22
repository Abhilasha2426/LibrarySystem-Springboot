package com.capgemini.librarymanagementsystemuser.dao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.Random;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.capgemini.librarymanagementsystemuser.dto.BookInfo;
import com.capgemini.librarymanagementsystemuser.dto.Issue;
import com.capgemini.librarymanagementsystemuser.dto.UserInfoBean;

import lombok.extern.java.Log;

@Log
@Repository
public class AdminDAOImpl implements AdminDAO {
	@PersistenceUnit
	private EntityManagerFactory factory;

	Random random = new Random();

	@Override
	public Issue acceptRequest(int registerId, String userName, int bookId) {
		EntityManager entityManager = factory.createEntityManager();
		TypedQuery<UserInfoBean> query = entityManager.createQuery("From UserInfoBean  where username =: userName",
				UserInfoBean.class);
		query.setParameter("userName", userName);
		UserInfoBean user = query.getSingleResult();

		TypedQuery<BookInfo> typedQuery = entityManager.createQuery("From BookInfo  where bookId =: bookId",
				BookInfo.class);
		typedQuery.setParameter("bookId", bookId);
		BookInfo book = typedQuery.getSingleResult();

		Issue issue = new Issue();
		

		long lTime = new Date().getTime() + 15 * 24 * 60 * 60 * 1000;
		SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
		try {
			issue.setReturnDate(sdf.parse(sdf.format(new Date(lTime))));
			
		} catch (ParseException e) {
			e.printStackTrace();
		}

		
		// issue.setIssueId(random.nextInt(5000));
		issue.setIssueId(issue.getIssueId());
		issue.setIssueDate(new Date());
		issue.setRegisterId(registerId);
		
		
		issue.setUsers(user);
		issue.setBooks(book);

		// issue.setUserId(userInfoBean.getUserId());
		try {
			EntityTransaction transcation = entityManager.getTransaction();
			transcation.begin();
			entityManager.persist(issue);
			transcation.commit();
			entityManager.close();
		} catch (Exception e) {
			log.info(e.getMessage());
			for (StackTraceElement element : e.getStackTrace()) {
				log.info(element.toString());
			}
		}
		return issue;	}

	

	}

	
	
//	@Override
//	public Issue acceptRequest(int registerId) {
//		Issue issue = new Issue();
//		try {
//			EntityManager entityManager = factory.createEntityManager();
//			entityManager.getTransaction().begin();
//			LocalDate issueDate = LocalDate.now();
//			LocalDate returnDate = issueDate.plusDays(15);
//			issue.setIssueId(random.nextInt(5000));
//			issue.setIssueDate(issueDate);
////			int userId = 0;
////			issue.setUserId(userId);
//			issue.setRegisterId(registerId);
//			issue.setReturnDate(returnDate);
//			entityManager.persist(issue);
//			entityManager.getTransaction().commit();
//			entityManager.close();
//		}catch(Exception e) {
//			log.info(e.getMessage());
//			for (StackTraceElement element : e.getStackTrace()) {
//				log.info(element.toString());
//			}
//		}
//		return issue;
//	}
//
//}
