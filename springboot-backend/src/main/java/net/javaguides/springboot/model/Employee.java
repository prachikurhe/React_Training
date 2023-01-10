package net.javaguides.springboot.model;

import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="Emp_Name")
    private String empName;

    private String doj;

    private Double totalExp;
    
    private String reportingManager;
    
    private String designation;
    
    private String skills;
    
}
