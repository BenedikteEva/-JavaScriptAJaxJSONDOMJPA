/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import entities.Names;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author Ejer
 */
public class Tester {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("DOMSONAJAXJPA56PU");
        EntityManager em = emf.createEntityManager();

        Names names = new Names();

        // Resultatet er ikke kønt men som test betragtet er det vel fint nok
        System.out.println(names.getNamesCollection(em.createQuery("select n from Names n")));

    }
}
