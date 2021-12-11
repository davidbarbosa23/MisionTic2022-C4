package com.agency.packs.repositories;

import com.agency.packs.models.Pack;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackRepository extends MongoRepository<Pack, String> {

}
