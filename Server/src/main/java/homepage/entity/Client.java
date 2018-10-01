package homepage.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonGetter;

@Entity
@Table(name = "client")
public class Client {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "client_id", updatable = false, nullable = false)
    private int id;

    private String text;

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

}