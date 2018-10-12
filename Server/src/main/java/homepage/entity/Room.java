package homepage.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonGetter;

@Entity
@Table(name = "room")
public class Room {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "room_id", updatable = false, nullable = false)
    private int id;

    private String text;
    private String color;
    private String image;

    @JsonGetter("id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @JsonGetter("text")
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @JsonGetter("color")
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @JsonGetter("image")
    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}