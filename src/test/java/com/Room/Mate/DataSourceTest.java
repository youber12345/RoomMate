package com.Room.Mate;

import java.sql.Connection;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;


@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class DataSourceTest {
    @Autowired
    private DataSource dataSource;
    @Autowired
    private SqlSessionFactory sqlSessionFactory;

    @Test
    public void testConnection() {
        try(Connection con = dataSource.getConnection();
            SqlSession session =sqlSessionFactory.openSession();
        ){
            System.out.println("con =" + con);
            System.out.println("session =" + session);
        }catch (Exception e) {
            e.printStackTrace();

            // TODO: handle exception
        }
    }
}