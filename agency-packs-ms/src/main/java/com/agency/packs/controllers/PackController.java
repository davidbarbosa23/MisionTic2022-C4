package com.agency.packs.controllers;

import com.agency.packs.models.Pack;
import com.agency.packs.repositories.PackRepository;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/packs")
public class PackController {

    private final PackRepository packRepository;

    public PackController (PackRepository packRepository) {
        this.packRepository = packRepository;
    }

    @PostMapping("/")
    public Pack create (@Validated @RequestBody Pack p) {
        return packRepository.insert(p);
    }

    @GetMapping("/")
    public List<Pack> readAll () {
        return packRepository.findAll();
    }

    @GetMapping("/{id}")
    public Pack getById (@PathVariable String id) {
        return packRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, id + " not found"));
    }

    @PutMapping("/{id}")
    public Pack update (@PathVariable String id, @Validated @RequestBody Pack p) {
        Pack pack = packRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, id + " not found"));
        pack.setTitle(p.getTitle());
        pack.setDescription(p.getDescription());
        pack.setPrice(p.getPrice());
        pack.setDiscount(p.getDiscount());
        pack.setCountry(p.getCountry());
        pack.setImageUrl(p.getImageUrl());

        return packRepository.save(pack);
    }

    @PutMapping("/{id}/status")
    public Pack updateStatus (@PathVariable String id, @Validated @RequestBody Pack p) {
        Pack pack = packRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, id + " not found"));
        pack.setIsActive(p.getIsActive());

        return packRepository.save(pack);
    }

    @DeleteMapping("/{id}")
    public void delete (@PathVariable String id) {
        packRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, id + " not found"));
        packRepository.deleteById(id);
    }
}
