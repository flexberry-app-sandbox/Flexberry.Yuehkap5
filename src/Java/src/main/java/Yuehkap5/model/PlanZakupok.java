package Yuehkap5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Yuehkap5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ПланЗакупок
 */
@Entity(name = "IISYuehkap5ПланЗакупок")
@Table(schema = "public", name = "ПланЗакупок")
public class PlanZakupok {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sklady")
    @Convert("Sklady")
    @Column(name = "Склады", length = 16, unique = true, nullable = false)
    private UUID _skladyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sklady", insertable = false, updatable = false)
    private Sklady sklady;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizacii")
    @Convert("Organizacii")
    @Column(name = "Организации", length = 16, unique = true, nullable = false)
    private UUID _organizaciiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizacii", insertable = false, updatable = false)
    private Organizacii organizacii;

    @OneToMany(mappedBy = "planzakupok", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Plan> plans;


    public PlanZakupok() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }


}