Scenario 1: The bank wants to apply a discount to loan interest rates for customers above 60 years old.

BEGIN

for data in(
    select c.id,c.age,l.interestRate
    from customers c join loans l 
    on c.id = l.customer_id
) 
LOOP

    if data.age > 60 then
        update loans
        set interestRate = interestRate -1
        where customer_id = data.id;
    end if;
END LOOP;
END;
/


Scenario 2: A customer can be promoted to VIP status based on their balance.

BEGIN
    for data in(
        select id,balance
        from customers 
    ) 
    loop
        if data.balance>10000 then
            update customers
            set isVIP = 'True'
            where id=data.id;
        end if;
    end loop;
end;
/

Scenario 3: The bank wants to send reminders to customers whose loans are due within the next 30 days.

BEGIN
    for data in (
        select id,dueDate
        from loans 
        where dueDate between sysdate and sysdate+30
    )
    loop
         DBMS_OUTPUT.PUT_LINE(
         'Reminder sent'|| data.id|| ' Loan due on  || data.dueDate'
    
      );
    end loop;
end;
/