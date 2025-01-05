package com.Room.Mate;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;
import java.sql.Connection;

@SpringBootTest
public class DataSourceTest {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private SqlSessionFactory sqlSessionFactory;

    @Test
    public void testConnection() {
        try (Connection con = dataSource.getConnection();
             SqlSession session = sqlSessionFactory.openSession()) {
            System.out.println("Connection established: " + con);
            System.out.println("SQL Session created: " + session);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
