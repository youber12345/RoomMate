package com.Room.Mate;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.fail; // fail 사용 예

import java.sql.Connection;
import java.sql.DriverManager;


public class JDBCTest {
    static {
        try {
            // MySQL JDBC 드라이버 로드
            Class.forName("com.mysql.cj.jdbc.Driver");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testConnection() {
        // MySQL 연결 정보 (application.properties에 설정된 값)
        String url = "jdbc:mysql://roomm.cr4iyk66kyu3.us-east-1.rds.amazonaws.com:3306/room?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=UTC&autoReconnection=true";
        String username = "admin";
        String password = "rmadmin24";

        try (Connection con = DriverManager.getConnection(url, username, password)) {
            System.out.println(con);  // 연결이 성공하면 연결 객체를 출력
        } catch (Exception e) {
            fail(e.getMessage());  // 연결 실패 시 오류 메시지를 출력
        }
    }
}
