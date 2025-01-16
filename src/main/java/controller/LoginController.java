package controller;

import Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        // LoginRequest 객체를 userService에 전달하여 인증 수행
        boolean isAuthenticated = userService.authenticateUser(loginRequest);

        if (isAuthenticated) {
            // 로그인 성공 시, JWT 또는 세션 생성
            return ResponseEntity.ok().body("로그인 성공");
        } else {
            return ResponseEntity.status(401).body("이메일 또는 비밀번호가 잘못되었습니다.");
        }
    }
}
