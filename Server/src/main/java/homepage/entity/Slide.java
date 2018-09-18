package homepage.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonGetter;

@Entity
@Table(name = "slide")
public class Slide {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "slide_id", updatable = false, nullable = false)
    private int id;

    private String name;
    private String image;
    private String title;
    private String text;

    @ManyToOne()
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

    @JsonGetter("title")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @JsonGetter("text")
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
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