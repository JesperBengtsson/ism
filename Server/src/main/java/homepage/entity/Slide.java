package homepage.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonGetter;

@Entity(name = "slide")
@Table(name = "slide")
public class Slide {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "slide_id", updatable = false, nullable = false)
    private int id;

    private String name;
    private String image;

    @ManyToOne()
    //@ManyToOne()
    @JoinColumn(name = "bundle_id")
    private Bundle bundle;

	/*
    @Override
    public String toString() {
    	return String.format("Slide[id:%d, name:%s, image:%s",id, name, image);
    }
    */

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

    @JsonGetter("image")
    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }


    public Bundle getBundle() {
        return bundle;
    }

    public void setBundle(Bundle bundle) {
        this.bundle = bundle;
    }

}