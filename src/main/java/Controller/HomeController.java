package Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index";  // index.html (리액트 페이지) 렌더링
    }

    @GetMapping("/login")
    public String login() {
        return "index";  // 로그인 페이지도 리액트에서 처리
    }
}