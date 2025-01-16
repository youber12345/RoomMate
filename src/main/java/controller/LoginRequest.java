package controller;

public class LoginRequest {
    private String email;
    private String password;

    // 기본 생성자
    public LoginRequest() {}

    // getter, setter 메소드
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
