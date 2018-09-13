package entity;

import com.fasterxml.jackson.annotation.JsonGetter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "bundle")
public class Bundle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bundle_id", updatable = false, nullable = false)
    private int id;
    private String name;


    @OneToMany(mappedBy = "slide")
//    @OneToMany()
//    @JoinColumn(name = "ticket_id")
    private List<Slide> slides = new ArrayList<>();


    @JsonGetter("id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @JsonGetter("name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @JsonGetter("slide")
    public List<Slide> getSlides() {
        return slides;
    }

    public void setSlidse(List<Slide> slides) {
        this.slides = slides;
    }
}
