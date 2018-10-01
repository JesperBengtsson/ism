package homepage.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonGetter;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "appointment_id", updatable = false, nullable = false)
    private int id;

    @ManyToOne()
    @JoinColumn(name = "room_id")
    private Room room;

    @ManyToOne()
    @JoinColumn(name = "client_id")
    private Client client;

    private String text;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String recurrenceRule;
    private String recurrenceException;

    @JsonGetter("id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @JsonGetter("room")
    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    @JsonGetter("client")
    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    @JsonGetter("text")
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @JsonGetter("startDate")
    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    @JsonGetter("endDate")
    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    @JsonGetter("recurrenceRule")
    public String getRecurrenceRule() {
        return recurrenceRule;
    }

    public void setRecurrenceRule(String recurrenceRule) {
        this.recurrenceRule = recurrenceRule;
    }

    @JsonGetter("recurrenceException")
    public String getRecurrenceException() {
        return recurrenceException;
    }

    public void setRecurrenceException(String recurrenceException) {
        this.recurrenceException = recurrenceException;
    }
}