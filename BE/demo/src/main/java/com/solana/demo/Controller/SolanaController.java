package com.solana.demo.Controller;

import com.solana.demo.Service.SolanaServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/solana")
@CrossOrigin("*")
public class SolanaController {
    @Autowired
    SolanaServ solanaService;
    @GetMapping("/balance/{address}")
    public ResponseEntity<String> getBalance(@PathVariable String address) {
        String balance = solanaService.getBalance(address);
        return ResponseEntity.ok(balance);
    }

}
