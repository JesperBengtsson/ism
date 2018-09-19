package homepage.entity;

import com.fasterxml.jackson.annotation.JsonGetter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Table(name = "bundle")
public class Bundle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bundle_id", updatable = false, nullable = false)
    private int id;

    private String name;



    @OneToMany(mappedBy = "bundle")
//    @OneToMany()
//    @JoinColumn(name = "slide_id")
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

    @JsonGetter("slides")
    public List<Integer> getSlideIDs() {
        List<Integer> tmp = this.slides.stream().map(Slide::getId).collect(Collectors.toList());
        return tmp;
    }

    public void setSlides(List<Slide> slides) {
        this.slides = slides;
    }
}
